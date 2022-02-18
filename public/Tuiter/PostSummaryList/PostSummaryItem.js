const PostSummaryItem = (post) => {
    return `
    <li class="list-group-item">
            <h6 class="text-muted">${post.topic}</h6>
            <p class="wd-Web-text-bold wd-text-whitee">
              ${post.userName} <i class="fas fa-check-circle"></i> ${post.time}
            </p>
            <p
              class="wd-marg wd-Web-text-bold  col-4 col-sm-6 col-md-8 col-lg-6 col-xl-8 col-xxl-9 wd-text-whitee"
            >
              ${post.title}
            </p>
            <img
              src=${post.image}
              class="wd-img wd-img-set"
            />
            <p class=" wd-marg">123K Tweets</p>
          </li>
    
    `;
}
export default PostSummaryItem;