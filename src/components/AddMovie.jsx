import React from 'react'
import Nav from './Nav'

const AddMovie = () => {
  return (
    <div>
     
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Movie name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Actor name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Actress name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Director name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
              <button type="button" class="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMovie