
const WhoToFollowListItem = (who) => {
    return `
        <li class="list-group-item">

        <div class="wd-float">
        <img class="wd-explore-avatar" src= ${who.avatarIcon}>
        </img> 
        </div>

        <div class="wd-follow-text-mar wd-float wd-z-in">
        <h6 class="wd-Web-text-bold">       
        ${who.userName} 
        <i class="fas fa-check-circle"></i>
        </h6>

        <p class="wd-marg-t wd-text-whitee">
        ${who.handle}
        </p>
        </div>
        
        <button class="btn btn-primary rounded-pill wd-button-follow">Follow</button>
        </li>
    `;
}

export default WhoToFollowListItem;


