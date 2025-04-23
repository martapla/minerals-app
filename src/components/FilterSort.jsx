import React from 'react'

const FilterSort = ({search, handleSearch}) => {
  return (
    <div className='input-search'>
      <input 
        type="text"
        value={search} 
        onChange= {(e)=>handleSearch(e.target.value)}
        placeholder='Search mineral...'
      />
    </div>
  )
}

export default FilterSort