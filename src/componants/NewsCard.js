import React from "react";

const NewsCard = (props) =>{
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <div className="container-fluid">
        <div class="card ">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs4CxMSN6MlCcmCpnxzXd0HkHjUVILomt1Q&usqp=CAU"
                : imageUrl
            }
            class="card-img-top img-fluid" 
            alt="..."
            
          />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
