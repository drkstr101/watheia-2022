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
    // create type property
    const type = factory.createPropertySignature(
      undefined,
      factory.createIdentifier('type'),
      undefined,
      factory.createLiteralTypeNode(factory.createStringLiteral(key))
      // factory.createKeywordTypeNode(SyntaxKind.NumberKeyword)
    );

    // create User type
    return [
      ...acc,
      factory.createTypeAliasDeclaration(
        [factory.createModifier(SyntaxKind.ExportKeyword)],
        factory.createIdentifier(key),
        undefined,
        factory.createTypeLiteralNode([type])
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
    printer.printList(
      ListFormat.MultiLine,
      factory.createNodeArray(entries),
      sourceFile
    )
  );

  return {
    success: true,
  };
}
