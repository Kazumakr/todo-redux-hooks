import React from "react";
import { useDispatch } from "react-redux";

import { removeTodoAction, doneToDoAction } from "../redux/action/actions";

const ToDos = ({ todoArr }) => {
	const dispatch = useDispatch();
	return (
		<div className="collection">
			{todoArr &&
				todoArr.map((todo) => (
					<div className="collection-item" key={todo.id}>
						<span
							style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
							onClick={() => {}}
						>
							{todo.content}
						</span>
						<a
							href="#~"
							className="secondary-content"
							onClick={() => dispatch(removeTodoAction(todo.id))}
						>
							<i className="material-icons red-text text-accent-1">delete</i>
						</a>
						<a
							href="#~"
							className="secondary-content"
							onClick={() => dispatch(doneToDoAction(todo.isDone))}
						>
							<i
								className={`material-icons ${
									!todo.isDone
										? "blue-text text-lighten-4"
										: "amber-text text-darken-2"
								}`}
							>
								check
							</i>
						</a>
					</div>
				))}
		</div>
	);
};

export default ToDos;
