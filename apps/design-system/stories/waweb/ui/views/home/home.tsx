import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export const Home = () => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-neutral-700">
        <p className="text-base font-semibold leading-7 text-primary-600">Introducing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          JavaScript for Beginners
        </h1>
        <p className="mt-6 text-xl leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
          nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci
          at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
            mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
            penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
            rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
            vitae sed turpis id.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-neutral-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-primary-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-neutral-900">Data types.</strong> Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-primary-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-neutral-900">Loops.</strong> Anim aute id
                magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-primary-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-neutral-900">Events.</strong> Ac tincidunt
                sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
            blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.
            Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
            tempor et ut. Ac lorem vel integer orci.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-900">
            From beginner to expert in 3 hours
          </h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
            arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
            vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
            Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <figure className="mt-10 border-l border-primary-600 pl-9">
            <blockquote className="font-semibold text-neutral-900">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus
                nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet
                aliquet eget cras. Sem volutpat enim tristique.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-neutral-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-neutral-900">Maria Hill</strong> –
                Marketing Manager
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
            mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
            penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-neutral-50 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-neutral-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-neutral-300"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Everything you need to get up and running
          </h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci
            dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt
            sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui
            tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras
            fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
            mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
            penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
      </div>
    </div>
  );
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // return (
  //   <article>
  //     <header className="absolute inset-x-0 top-0 z-50">
  //       <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
  //         <div className="flex lg:flex-1">
  //           <a href="#" className="-m-1.5 p-1.5">
  //             <span className="sr-only">Watheia Labs</span>
  //             <img
  //               className="h-8 w-auto"
  //               src="https://tailwindui.com/img/logos/mark.svg?color=primary&shade=600"
  //               alt=""
  //             />
  //           </a>
  //         </div>
  //         <div className="flex lg:hidden">
  //           <button
  //             type="button"
  //             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
  //             onClick={() => setMobileMenuOpen(true)}
  //           >
  //             <span className="sr-only">Open main menu</span>
  //             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  //           </button>
  //         </div>
  //         <div className="hidden lg:flex lg:gap-x-12">
  //           {navigation.map((item) => (
  //             <a
  //               key={item.name}
  //               href={item.href}
  //               className="text-sm font-semibold leading-6 text-neutral-900"
  //             >
  //               {item.name}
  //             </a>
  //           ))}
  //         </div>
  //         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  //           <a href="#" className="text-sm font-semibold leading-6 text-neutral-900">
  //             Log in <span aria-hidden="true">&rarr;</span>
  //           </a>
  //         </div>
  //       </nav>
  //       <Dialog
  //         as="div"
  //         className="lg:hidden"
  //         open={mobileMenuOpen}
  //         onClose={setMobileMenuOpen}
  //       >
  //         <div className="fixed inset-0 z-50" />
  //         <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
  //           <div className="flex items-center justify-between">
  //             <a href="#" className="-m-1.5 p-1.5">
  //               <span className="sr-only">Your Company</span>
  //               <img
  //                 className="h-8 w-auto"
  //                 src="https://tailwindui.com/img/logos/mark.svg?color=primary&shade=600"
  //                 alt=""
  //               />
  //             </a>
  //             <button
  //               type="button"
  //               className="-m-2.5 rounded-md p-2.5 text-neutral-700"
  //               onClick={() => setMobileMenuOpen(false)}
  //             >
  //               <span className="sr-only">Close menu</span>
  //               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  //             </button>
  //           </div>
  //           <div className="mt-6 flow-root">
  //             <div className="-my-6 divide-y divide-neutral-500/10">
  //               <div className="space-y-2 py-6">
  //                 {navigation.map((item) => (
  //                   <a
  //                     key={item.name}
  //                     href={item.href}
  //                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
  //                   >
  //                     {item.name}
  //                   </a>
  //                 ))}
  //               </div>
  //               <div className="py-6">
  //                 <a
  //                   href="#"
  //                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
  //                 >
  //                   Log in
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </Dialog.Panel>
  //       </Dialog>
  //     </header>

  //     <div className="relative isolate px-6 pt-14 lg:px-8">
  //       <div
  //         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  //         aria-hidden="true"
  //       >
  //         <div
  //           className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-300 to-secondary-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
  //           style={{
  //             clipPath:
  //               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  //           }}
  //         />
  //       </div>
  //       <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
  //         <div className="hidden sm:mb-8 sm:flex sm:justify-center">
  //           <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-600 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20">
  //             Announcing our next round of funding.{' '}
  //             <a href="#" className="font-semibold text-primary-600">
  //               <span className="absolute inset-0" aria-hidden="true" />
  //               Read more <span aria-hidden="true">&rarr;</span>
  //             </a>
  //           </div>
  //         </div>
  //         <div className="text-center">
  //           <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
  //             Data to enrich your online business
  //           </h1>
  //           <p className="mt-6 text-lg leading-8 text-neutral-600">
  //             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
  //             commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
  //           </p>
  //           <div className="mt-10 flex items-center justify-center gap-x-6">
  //             <a
  //               href="#"
  //               className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
  //             >
  //               Get started
  //             </a>
  //             <a href="#" className="text-sm font-semibold leading-6 text-neutral-900">
  //               Learn more <span aria-hidden="true">→</span>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //       <div
  //         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  //         aria-hidden="true"
  //       >
  //         <div
  //           className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-300 to-secondary-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
  //           style={{
  //             clipPath:
  //               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </article>
  // );
};
