import React from "react"

export default function Form(forms){
    return (
    <form className="formData" onSubmit={forms.props.handleClick}>
        <div className="formRow">
            <label htmlFor="category" className="field">Category:</label>
            <select id="category"
                value={forms.props.formData.category}
                onChange={forms.props.handleChange}
                name="category"
                required
            >
                <option value="" disabled selected>--Choose Option--</option>
                <option value='9'>General Knowledge</option>
                <option value='21'>Sports</option>
                <option value='11'>Film</option>
                <option value='28'>Vehicle</option>
            </select>
        </div >
        <div className="formRow">
            <label htmlFor="difficulty"className="field" >Difficulty:</label>
            <select 
                id="difficulty"
                value={forms.props.formData.difficulty}
                onChange={forms.props.handleChange}
                name="difficulty"
                required 
            >
                <option value="" disabled selected>--Choose Option--</option>
                <option value='easy'>Easy</option>
                <option value="medium">Medium</option>
                <option value='hard'>Hard</option>
            </select>
        </div>
        <div className="formRow">
            <label htmlFor="questions" className="field">No:of Questions:</label>
            <select id="questions"
                value={forms.props.formData.questions}
                onChange={forms.props.handleChange}
                name="questions"
                required
                className="questions"
            >
                <option value="" disabled selected>--Choose--</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
            </select>
        </div >
        <div className="formRow">
            <button
                className="quiz"
            >
                Start Quiz
            </button>
        </div>
  </form>
  )

}