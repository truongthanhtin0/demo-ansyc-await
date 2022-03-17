import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/action";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PostDetail({ match }) {
  const dispatch = useDispatch();
  const { postDetail } = useSelector((state) => state.accountReducer);
  console.log("Log : postDetail", postDetail);

  useEffect(() => {
    dispatch(
      getPostDetail({
        id: match.params.id,
      })
    );
  }, []);

  return (
    <div>
      <h1>Post Detail With ID {postDetail.id}</h1>
      <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://photo-cms-baonghean.zadn.vn/w607/Uploaded/2021/nkdkswkqoc/201706/original/images1928458_1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {postDetail.id} - {postDetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {postDetail.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default PostDetail;
