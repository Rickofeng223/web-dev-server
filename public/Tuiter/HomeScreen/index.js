import PostList from "./PostList.js";
import PostItem from "./PostItem.js";

const posIndex = () => {
  return `
    <ul class="list-group ">
            ${PostList.map((post) => {
              return PostItem(post);
            }).join("")}
  <div class= "wd-border-s wd-pading-right">
  <div class="wd-container p-3 ">
    <div class="wd-left-element">
    <img class="wd-round-rad wd-left-element-img" src= "https://cdn-icons-png.flaticon.com/512/147/147144.png">
        </img> 
    </div>
    <div class= "wd-right-element">
      <p class="wd-text-whitee">CNN Post <i class="fas fa-check-circle"></i>@CNNPost - 20h
       <i class="fas fa-ellipsis-h wd-dot"></i></p>
      <p class="wd-relat wd-text-whitee">
          Team USA will reportedly receive Olympic torches in lieu of medals until Kamila Valieva case resolved <span class="text-primary">trib.al/nx2Gfaq</span>
        </p>
    </div>
  </div>
  <div class="card wd-right-element wd-bord-round wd-relat" style="width: 79%;">
  <img src="https://stillmed.olympics.com/media/Images/News/2021/09/2021-09-08-Beijing-featured.jpg" class="card-img-top wd-bord-top wd-bord-bottom" alt="...">
  </div>
  <div class="wd-right-element wd-paddings">
          <a href="#" class="wd-link wd-marg"><i class="far fa-comment wd-icon-adjust"></i>31k</a>
          <a href="#" class="wd-link wd-marg"><i class="fas fa-retweet wd-icon-adjust"></i>33k</a>
          <a href="#" class="wd-link wd-marg"><i class="fas fa-heart wd-red-heart"></i>37k</a>
          <a href="#" class="wd-link wd-marg"><i class="fas fa-upload"></i></a>
  </div>
</div>
    `;
};

export default posIndex;
