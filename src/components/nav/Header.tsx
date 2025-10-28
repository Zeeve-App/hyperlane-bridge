import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import Logo from '../../images/logos/app-logo.svg';
import Name from '../../images/logos/app-name.svg';
// import Title from '../../images/logos/app-title.svg';
import Brand from '../../images/icons/makachain.png';


export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center py-2">
          <Image src={Brand} width={80} alt="" className=" mt-0.5 pb-px  border-r border-gray-200" />
          <div className="h-6 w-px bg-gray-200 mx-2"></div>
          <Image src={Logo} width={24} alt="" />
          <Image src={Name} width={130} alt="" className="ml-2 mt-0.5 hidden sm:block" />
          {/* <h1 className="ml-2 pt-px text-2xl font-bold uppercase tracking-wide text-white">Panda C</h1> */}
          {/* <Image src={Title} width={210} alt="" className="ml-2 mt-0.5 pb-px" /> */}
        </Link>
        <div className="flex flex-col items-end gap-2 md:flex-row-reverse md:items-start">
          <ConnectWalletButton />
        </div>
      </div>
      {/* <div className="flex items-start justify-left pt-1"> */}
        {/* <Link href="/" className="flex items-center py-2"> */}
          {/* <Image src={Brand} width={130} alt="" className="ml-2 mt-0.5 pb-px " /> */}
        {/* </Link> */}
      {/* </div> */}
    </header>
  );
}
