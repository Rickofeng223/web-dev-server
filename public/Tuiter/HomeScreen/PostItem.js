const PostItem = (post) => {
  return `
  <li class="list-group-item wd-backGround">
    <div class="wd-container ">
    
      <div class="wd-left-element">
      <img class="wd-round-rad wd-left-element-img" src= ${post.avatarIcon}>
        </img> 
      </div>
      <div class= "wd-right-element">
      <p>${post.userName} <i class="fas fa-check-circle"></i>${post.handle} ${post.time} <i class="fas fa-ellipsis-h wd-dot"></i> </p>
      <p class="wd-relat">
          ${post.title}
          <span class="text-primary">@Inspiration4x</span>
          crew on the first all -civilian orbital space...
        </p>
      </div>
    </div>
    <div class="card wd-right-element wd-bord-round wd-relat" style="width: 80%;">
      <img src="${post.cardImage}" class="card-img-top wd-bord-top" alt="...">
      <div class="card-body wd-backGround">
      <h5 class="card-title">${post.cardTitle}</h5>
      <p class="card-text text-muted">${post.cardText}</p>
      <i class="fas fa-link text-muted"> ${post.From}</i> 

    </div>
    </div>
    <div class="wd-right-element wd-paddings">
          <a href="#" class="wd-link wd-marg"><i class="far fa-comment wd-icon-adjust"></i>31k</a>
          <a href="#" class="wd-link wd-marg"><i class="fas fa-retweet wd-icon-adjust"></i>33k</a>
          <a href="#" class="wd-link wd-marg"><i class="fas fa-heart wd-red-heart"></i>37k</a>
          <a href="#" class="wd-link wd-marg"><i class="fas fa-upload"></i></a>
  </div>

   

   </li> 
    `;
};
export default PostItem;

