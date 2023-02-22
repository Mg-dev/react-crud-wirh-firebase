
const Popup = ({handleDeleteTrue}) => {
    return (
        <div className="card p-3 bg-dark text-light position-absolute z-100 h-100 w-100">
            <div className="">
            <p>You sure you wanna delete?</p>
            <button className="text-dark btn btn-sm btn-light me-3">Cancel</button>
            <button onClick={handleDeleteTrue} className="btn btn-sm btn-outline-danger">
                Confirm
            </button>
            </div>
        </div>
    )
}

export default Popup