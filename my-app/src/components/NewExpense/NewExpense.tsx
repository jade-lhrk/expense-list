import React, { useState } from "react";
import "./NewExpense.css";
import { ExpemseForm } from "./ExpemseForm";
import { ExpenseData } from "../../App";

export const NewExpense = (props: { onAddExpense: Function }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpemseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpemseForm>
      )}
    </div>
  );
};
