import { useState } from "react";

function Form({ onSubmit }) {
    // Set the state of the Form component by creating a state object
    const [formData, setFormData] = useState({
        recipientName: '',
        senderName: '',
        message: '',
        occasion: 'Birthday',
        includesPersonalNote: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            // Use the spread operator to extract the CONTENTS of the form data ONLY
            ...formData,
            [name] : type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Recipient's Name:</label>
                    <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} className="form-control"/>
                </div>
                <div>
                    <label>Sender's Name:</label>
                    <input type="text" name="senderName" value={formData.senderName} onChange={handleChange} className="form-control" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="form-control"></textarea>
                </div>
                <div>
                    <label>Occasion:</label>
                    <select name="occasion" value={formData.occasion} onChange={handleChange} className="form-select">
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Holiday">Holiday</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-prepend">Include Personal Note:</label>
                    <input type="checkbox" name="includesPersonalNote" checked={formData.includesPersonalNote} onChange={handleChange} className="input-group-text" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default Form;