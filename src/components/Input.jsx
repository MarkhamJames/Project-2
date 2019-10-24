import React from 'react'
export default function Createinput(props) {
  return (
    <div>
      <label htmlFor="CategorySelect">Choose a category:</label>
      <select onChange={props.handleChange} name="category" id="CategorySelect" defaultValue="choose">
        <option disabled value="choose">--Please choose an option--</option>
        <option>films</option>
        <option>people</option>
        <option>species</option>
        <option>locations</option>
        <option>vehicles</option>
      </select>

    </div>
  )
}