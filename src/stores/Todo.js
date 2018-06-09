import { observable } from "mobx"

class Todo {
    id = Math.random();
    @observable title = "333";
    @observable finished = false;
}

export default Todo;