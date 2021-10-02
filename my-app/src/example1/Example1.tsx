import React from 'react';
import './Example1.css';

const DEFAULT_USER = {
  name: 'Mackenzie Clark',
  age: 26,
  location: 'Tennessee',
  bio: 'I like cats, coding, and coffee.',
  avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQHjAvTu7IxL1w/profile-displayphoto-shrink_800_800/0/1616028874639?e=1638403200&v=beta&t=knzq6auGBDF9RSTTIt-QF1x3DT0GgP5_6fCjBMCsoqg',
  status: 'Oh boy I sure do love some live coding! Oh boy I sure do love some live coding! Oh boy I sure do love some live coding! Oh boy I sure do love some live coding! Oh boy I sure do love some live coding! Oh boy I sure do love some live coding!'
}

export default function Example1(){
  const userList = [];

  for(let i = 0; i < 5; i++) {
    userList.push(DEFAULT_USER);
  }

  return (
    <section>
      <h2>Example 1</h2>
      <h3>User feed</h3>
      <ul className="user-list" >
        <li className="user-item">
          <img className="user-image" src="https://media-exp1.licdn.com/dms/image/C5603AQHjAvTu7IxL1w/profile-displayphoto-shrink_800_800/0/1616028874639?e=1638403200&v=beta&t=knzq6auGBDF9RSTTIt-QF1x3DT0GgP5_6fCjBMCsoqg" alt="Mackenzie Clark profile"/>
          <div className="about-section">
            <p>Mackenzie Clark, 26, Tennessee</p>
            <p>I like cats, coding, and coffee.</p>
            <p>Oh boy I sure do love live coding!</p>
          </div>
        </li>
        <li className="user-item">
          <img className="user-image" src="https://media-exp1.licdn.com/dms/image/C5603AQHjAvTu7IxL1w/profile-displayphoto-shrink_800_800/0/1616028874639?e=1638403200&v=beta&t=knzq6auGBDF9RSTTIt-QF1x3DT0GgP5_6fCjBMCsoqg" alt="Mackenzie Clark profile"/>
          <div className="about-section">
            <p>Mackenzie Clark, 26, Tennessee</p>
            <p>I like cats, coding, and coffee.</p>
            <p>Oh boy I sure do love live coding!</p>
          </div>
        </li>
        <li className="user-item">
          <img className="user-image" src="https://media-exp1.licdn.com/dms/image/C5603AQHjAvTu7IxL1w/profile-displayphoto-shrink_800_800/0/1616028874639?e=1638403200&v=beta&t=knzq6auGBDF9RSTTIt-QF1x3DT0GgP5_6fCjBMCsoqg" alt="Mackenzie Clark profile"/>
          <div className="about-section">
            <p>Mackenzie Clark, 26, Tennessee</p>
            <p>I like cats, coding, and coffee.</p>
            <p>Oh boy I sure do love live coding!</p>
          </div>
        </li>
        <li className="user-item">
          <img className="user-image" src="https://media-exp1.licdn.com/dms/image/C5603AQHjAvTu7IxL1w/profile-displayphoto-shrink_800_800/0/1616028874639?e=1638403200&v=beta&t=knzq6auGBDF9RSTTIt-QF1x3DT0GgP5_6fCjBMCsoqg" alt="Mackenzie Clark profile"/>
          <div className="about-section">
            <p>Mackenzie Clark, 26, Tennessee</p>
            <p>I like cats, coding, and coffee.</p>
            <p>Oh boy I sure do love live coding!</p>
          </div>
        </li>
      </ul>
    </section>
  );
}