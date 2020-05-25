class ToDoItem {

   constructor(id, title, description, date, from, to, isToDo, isDeleted) {

      this.id = id;
      this.title = title;
      this.description = description;
      this.date = date;
      this.from = from;
      this.to = to;
      this.isToDo = isToDo;
      this.isDeleted = isDeleted;
   }
}

export default ToDoItem;
