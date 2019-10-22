import React from 'react'
export default function Createinput() {
  return (
    <div>
      <label for="CategorySelect">Choose a category:</label>
      <select name="category" id="CategorySelect">
        <option value="">--Please choose an option--</option>
        <option value="">films</option>
        <option value="">people</option>
        <option value="">species</option>
        <option value="">locations</option>
        <option value="">vehicles</option>
      </select>
      {/* <input type="text" placeholder="search" value={this.state.films} onChange={props.handleChange}/> */}
    </div>
  )
}