import PostSummaryItem from "./PostSummaryItem.js";
import PostSummaryList from "./PostSummaryList.js";

const posts = () => {
    return `
    <ul class="list-group ">
            ${PostSummaryList.map((post) => {
              return PostSummaryItem(post);
            }).join("")}

        </ul>
    `;
}
export default posts;