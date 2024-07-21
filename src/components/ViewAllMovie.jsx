import React from 'react'
import Nav from './Nav'

const ViewAllMovie = () => {
  return (
    <div>
      
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Movie Name</th>
      <th scope="col">Actor</th>
      <th scope="col">Actress</th>
      <th scope="col">Director</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Rajamanikkam</th>
      <td>shake abdhulla</td>
      <td>aju</td>
      <td>Robin Lomin</td>
    </tr>
    
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllMovie