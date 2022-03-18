import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPost } from "../../store/action";
import history from "../../util/history";

function ListPost(props) {
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.accountReducer);

  useEffect(() => {
    dispatch(getListPost());
  }, []);

  return (
    <div>
      <h1>List Post</h1>
      <List sx={{ width: "50%", margin: "0 auto" }}>
        {postList.map((post) => (
          <ListItem
            key={post.id}
            disableGutters
            secondaryAction={
              <IconButton onClick={() => history.push(`/posts/${post.id}`)}>
                <CommentIcon />
              </IconButton>
            }
            divider
          >
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListPost;
