function DownloadNow() {
  return (
    <div className='flex place-items-center mx-auto bg-black h-56'>
      <div className="mx-auto py-6 px-4 sm:p-8">
        <span className="mx-auto basis-full block text-white mb-2 sm:mb-4 text-3xl font-semibold text-gradient" id="try-text">Try out Neuro-Aid today for free</span>
        <button className="bg-blue border-2 border-blue hover:border-[#BAE1FF] hover:bg-[#BAE1FF] rounded-3xl text-black text-base sm:text-lg p-2 px-4 shadow-md font-semibold">Download Now</button>
      </div>
    </div>
  );
}

export default DownloadNow;