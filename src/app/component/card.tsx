import Image from 'next/image'

export default function Card() {
  return (
    <div className='group relative h-[522px] w-[384px] bg-white stroke-black rounded-2xl p-6 space-y-6 border border-neutral-black'>
      <Image
        src='/images/illustration-article.svg'
        alt='Illustration of the article'
        width={336}
        height={200}
        className='h-[200px] w-full rounded-xl'
      />

      <div className='flex flex-col gap-3'>
        <div className='font-bold text-sm bg-primary-yellow w-[82px] h-[29px] rounded-[4px] px-3 py-1 flex justify-center items-center'>
          Learning
        </div>
        <p className='text-sm'>Published 21 Dec 2023</p>
        <h1 className='group-hover:text-primary-yellow text-2xl font-extrabold'>
          HTML & CSS Foundations
        </h1>
        <p className='text-neutral-grey'>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>

      <div className='flex items-center gap-3'>
        <Image
          src='/images/image-avatar.webp'
          alt='Profile picture of Greg Hooper'
          width={32}
          height={32}
          className='rounded-full'
        />
        <p className='text-sm font-bold'>Greg Hooper</p>
      </div>

      <div className='absolute bg-neutral-black h-[522px] w-[384px] rounded-2xl -top-4 left-2 -z-10 group-hover:-top-2 group-hover:left-4 transition-all duration-300' />
    </div>
  )
}
