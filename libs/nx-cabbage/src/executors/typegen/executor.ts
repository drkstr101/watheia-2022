import model from '@watheia/cabbage.model';
import { writeFileSync } from 'fs';
import {
  ListFormat,
  ScriptKind,
  ScriptTarget,
  SyntaxKind,
  TypeAliasDeclaration,
  createPrinter,
  createSourceFile,
  factory,
} from 'typescript';
import { TypegenExecutorSchema } from './schema';

export default async function runExecutor(options: TypegenExecutorSchema) {
  console.log('Executor ran for Typegen', options);

  const entries = Object.entries(model).reduce((acc, [key, model]) => {
    const typeAlias = `${key}Props`;

    // create type attributes
    const attributes = [
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier('type'),
        undefined,
        factory.createLiteralTypeNode(factory.createStringLiteral(key))
      ),
      ...model.fields.map((field) => {
        return factory.createPropertySignature(
          undefined,
          factory.createIdentifier(field.name),
          undefined,
          // TODO how to create any type?
          factory.createLiteralTypeNode(factory.createStringLiteral('any'))
        );
      }),
    ];

    // create User type
    return [
      ...acc,
      factory.createTypeAliasDeclaration(
        [factory.createModifier(SyntaxKind.ExportKeyword)],
        factory.createIdentifier(typeAlias),
        undefined,
        factory.createTypeLiteralNode(attributes)
      ),
    ];
    // return [...acc, model];
  }, [] as TypeAliasDeclaration[]);

  const sourceFile = createSourceFile(
    options.output,
    '',
    ScriptTarget.ESNext,
    true,
    ScriptKind.TS
  );

  const printer = createPrinter();

  writeFileSync(
    options.output,
    printer.printList(ListFormat.MultiLine, factory.createNodeArray(entries), sourceFile)
  );

  return {
    success: true,
  };
}
