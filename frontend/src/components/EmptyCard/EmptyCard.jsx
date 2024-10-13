import React from 'react'

const EmptyCard = ({ imgSrc, message }) => {
    return (
        <section className="flex flex-col items-center justify-center mt-[30%] px-4 sm:mt-[30%] lg:mt-[10%]">
            <img src={imgSrc} alt="No Notes" className="w-40 sm:w-60" />

            <p className="w-full sm:w-3/4 lg:w-1/2 text-sm font-medium text-slate-700 text-center leading-6 sm:leading-7 mt-4 sm:mt-5">
                {message}
            </p>
        </section>
    )
}

export default EmptyCard
