import React from "react";

function Story() {
  const profile = [
    { id: 1, name: "useruseruseruser1", imageUrl: "https://placekitten.com/408/287" },
    { id: 2, name: "user2", imageUrl: "https://placekitten.com/408/287" },
    { id: 3, name: "user3", imageUrl: "https://placekitten.com/408/287" },
    { id: 4, name: "user4", imageUrl: "https://placekitten.com/408/287" },
    { id: 5, name: "user5", imageUrl: "https://placekitten.com/408/287" },
    { id: 6, name: "user6", imageUrl: "https://placekitten.com/408/287" },
    { id: 7, name: "user7", imageUrl: "https://placekitten.com/408/287" },
    { id: 8, name: "user8", imageUrl: "https://placekitten.com/408/287" },
    { id: 9, name: "user9", imageUrl: "https://placekitten.com/408/287" },
    { id: 10, name: "user10", imageUrl: "https://placekitten.com/408/287" },
    { id: 11, name: "user11", imageUrl: "https://placekitten.com/408/287" },
    { id: 12, name: "user12", imageUrl: "https://placekitten.com/408/287" },
    { id: 13, name: "user13", imageUrl: "https://placekitten.com/408/287" },
    { id: 14, name: "user14", imageUrl: "https://placekitten.com/408/287" },
    { id: 15, name: "user15", imageUrl: "https://placekitten.com/408/287" },
    { id: 16, name: "user16", imageUrl: "https://placekitten.com/408/287" },
    { id: 17, name: "user17", imageUrl: "https://placekitten.com/408/287" },
    { id: 18, name: "user18", imageUrl: "https://placekitten.com/408/287" },
    { id: 19, name: "user19", imageUrl: "https://placekitten.com/408/287" },
    { id: 20, name: "user20", imageUrl: "https://placekitten.com/408/287" },
    { id: 21, name: "user21", imageUrl: "https://placekitten.com/408/287" },
    { id: 22, name: "user22", imageUrl: "https://placekitten.com/408/287" },
    { id: 23, name: "user23", imageUrl: "https://placekitten.com/408/287" },
    { id: 24, name: "user24", imageUrl: "https://placekitten.com/408/287" },
    { id: 25, name: "user25", imageUrl: "https://placekitten.com/408/287" },
    { id: 26, name: "user26", imageUrl: "https://placekitten.com/408/287" },
    { id: 27, name: "user27", imageUrl: "https://placekitten.com/408/287" },
    { id: 28, name: "user28", imageUrl: "https://placekitten.com/408/287" },
    { id: 29, name: "user29", imageUrl: "https://placekitten.com/408/287" },
    { id: 30, name: "user30", imageUrl: "https://placekitten.com/408/287" },
    // Add more items as needed
  ];

  function formatUsername(text) {
    const formatted = text.slice(0, 6);
    return formatted + '..';
  }

  return (
    
      <div className="flex space-x-4 cursor-pointer text-center overflow-x-scroll max-w-full no-scrollbar">
        {profile.map((val) => (
          <div key={val.id} className="w-16">
            <div className="bg-gradient-to-tr h-16 w-16 from-yellow-400 to-fuchsia-600 p-1 rounded-full text-center">
              <a className="block bg-black p-1 rounded-full">
                <img
                  src={val.imageUrl}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </a>
            </div>
            <a className="text-white">{formatUsername(val.name)}</a>
          </div>
        ))}
      </div>
  );
}

export default Story;
