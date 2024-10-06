import React from 'react'

const ProfileInfo = () => {
  return (
    <article className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>RM</div>

      <div>
        <p className="text-sm font-medium">Ravi</p>
        <button className='text-sm text-slate-700 underline'>
            Logout
        </button>
      </div>
    </article>
  )
}

export default ProfileInfo
