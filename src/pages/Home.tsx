/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandara725@@mail.com]
 * @create date 2021-07-02 15:09:23
 * @modify date 2021-07-02 15:09:23
 * @desc [todo]
 */

import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { TodoListItem } from "../components/todoListItem/TodoListItem";
import { rootStore } from "../redux/store";
import classes from "./Home.module.scss";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "../components/header/Header";
import { Modal } from "../components/modal/Modal";

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { TodoReducer } = useSelector((state: rootStore) => state);
  const handleButton = () => {
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
  };

  const { todoList }: TodoList = TodoReducer;
  return (
    <>
      <CssBaseline />
      <div className={classes.baseline}>
        <Container maxWidth="sm" className={classes.container}>
          <Modal modalOpen={modalOpen} modalClose={modalClose} />
          <Header handleButton={handleButton} />
          {todoList.map((todo: Todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </Container>
      </div>
    </>
  );
};
export default Home;
