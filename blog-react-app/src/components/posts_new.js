import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; //reduxForm is our function helper
//to connect our reduxForm to the FormReducer() function

class PostsNew extends Component {

	renderField(field) { //renders JSX for our <Field>
	//the field argument wires our event handlers to our <Field> component.
		const { meta: { touched, error },
				label,
				placeholder,
				input } = field;

		const className = `form-group ${touched && error ? 'is-invalid':''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input
					className="form-control"
					type="text"
					placeholder={placeholder}
					{...input} //mapping our event handlers inside field obj to our <input>
				/>
				{touched ? error : ""}
			</div>
		);
	}

	onSubmit(values) { //finally we get the validated values out of the form here
		//this === component
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;//event handler provided by redux-form
		//handlesubmit validates our form and then pipes our data to our provided function
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name="title"
					label="Title"
					placeholder="Blog Title"
					component={this.renderField}
					type="text"
				/>
				<Field
					name="categories"
					label="Categories"
					placeholder="Categories for your Blog"
					component={this.renderField}
					type="text"
				/>
				<Field
					name="content"
					label="Blog Content"
					placeholder="Enter content for your blog"
					component={this.renderField}
					type="text"
				/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if(!values.title || values.title.length < 3)
		errors.title = "Enter a Title that is at least 3 characters!!";
	if(!values.categories)
		errors.categories = "Enter some categories please!";
	if(!values.content)
		errors.content = "Enter some content please!";
	//if errors is empty, form is fine to submit.
	//if error has any value, redux-form assumes form is invalid
	return errors;
}

//for every form we create we assign a unique value to our form property
//so that its state is uniquely handled by our FormReducer.
export default reduxForm({
	validate,
	form: "PostsNewForm"
})(PostsNew);
