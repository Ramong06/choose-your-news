let topicData = [{
    id: 1,
    name: "Politics"
},
{
    id: 2,
    name: "Enviornment"
},
{
    id: 3,
    name: "Sports"
},
{
    id: 4,
    name: "Entertainment"
    }];

let lastId = 4;

//Empty topic container, render topics
renderTopics = () => {
    const topicContainer = document.querySelector(".topic-container");
    const topics = createTopics(topicData);

    while (topicContainer.firstChild) {
        topicContainer.removeChild(topicContainer.firstChild);
    }

    topicContainer.appendChild(topics);
}

//return HTML for each topic provided
createTopics = (topicData) => {
    const fragment = document.createDocumentFragment();

    topicData.forEach((data) => {
        const topic = createTopic(data);
        fragment.appendChild(topic);
    });
    return fragment;
}

//return markup for each object
function createTopic({ name, id }) {
    return createElement(
        "div",
        { class: "topic" },
        createElement(
            "button",
            { "aria-label": "Close", "data-id": id, onClick: handleTopicDelete },
            "x"
        ),
        createElement("a", { href: `topic.html?query=${name}` }, name)
    );
}

// Deletes a topic of click
function handleTopicDelete(event) {
    const id = Number(event.target.getAttribute("data-id"));
    topicData = topicData.filter((topic) => topic.id !== id);

    renderTopics();
}

function handleTopicAdd(event) {
    event.preventDefault();
    const input = document.querySelector("#add-topic");
    const value = input.value.trim();

    if (!value) {
        return;
    }

    topicData = [...topicData, { id: ++lastId, name: value }];

    input.value = "";

    renderTopics();
}
//renders topics on page load
renderTopics();

//handle new topic submissions on click
document.querySelector("#submit-topic").addEventListener("click");