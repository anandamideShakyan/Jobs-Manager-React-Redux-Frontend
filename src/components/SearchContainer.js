import { FormRow, FormRowSelect } from ".";
import React from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
	const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
		useSelector((store) => store.allJobs);

	const [values, setValues] = React.useState({
		isLoading,
		search,
		searchStatus,
		searchType,
		sort,
		sortOptions
	});
	const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
	const dispatch = useDispatch();

	const handleApply = (e) => {
		e.preventDefault();
		dispatch(handleChange({ ...values }));
	};
	const handleInputChanges = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setValues({ ...values, [name]: value });
	};
	const handleClear = (e) => {
		e.preventDefault();
		dispatch(clearFilters());
		setValues({
			isLoading,
			search,
			searchStatus,
			searchType,
			sort,
			sortOptions
		});
	};
	return (
		<Wrapper>
			<form className="form">
				<h4>search form</h4>
				<div className="form-center">
					{/* search position */}

					<FormRow
						type="text"
						name="search"
						value={values.search}
						handleChange={handleInputChanges}
					/>
					{/* search by status */}
					<FormRowSelect
						labelText="status"
						name="searchStatus"
						value={values.searchStatus}
						handleChange={handleInputChanges}
						list={["all", ...statusOptions]}
					/>
					{/* search by type */}
					<FormRowSelect
						labelText="type"
						name="searchType"
						value={values.searchType}
						handleChange={handleInputChanges}
						list={["all", ...jobTypeOptions]}
					/>
					{/* sort */}
					<FormRowSelect
						name="sort"
						value={values.sort}
						handleChange={handleInputChanges}
						list={sortOptions}
					/>
					<button
						className="btn btn-block btn-danger"
						disabled={isLoading}
						onClick={handleClear}
					>
						clear filters
					</button>
					<button
						className="btn btn-block btn-warning"
						disabled={isLoading}
						onClick={handleApply}
					>
						apply filters
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default SearchContainer;
