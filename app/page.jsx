import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" ">
     <section className=" dark:text-gray-800" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/022/769/837/non_2x/beautiful-pink-rose-flower-frame-with-watercolor-for-wedding-birthday-card-background-invitation-wallpaper-sticker-decoration-etc-vector.jpg')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
	<div className=" flex flex-row justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
      <div className=" w-[700px]">
      <img  src="https://t4.ftcdn.net/jpg/06/45/82/47/360_F_645824746_Efv1WqabC7B4ZXSBhmOfxP5ShdinbYd4.jpg"    alt="image" className="  object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
		
      
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ambiance Events
				
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
				Hall booking site for your special events. Sign in to book and see hall details.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <button><Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-pink-600 dark:text-gray-50">Log In</Link></button>
				<button><Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Register</Link></button>
				
			</div>
		</div>
	</div>
</section>
    </main>
  );
}
