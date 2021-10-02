import React from 'react';
import faker from 'faker';
import './Example2.css';


export default function Example2(){
  faker.locale = "de";
  const userList = [];

  for(let i = 0; i < 5; i++) {
    const isOdd = i % 2 === 0;
    userList.push(generateUser(isOdd, isOdd));
  }

  return (
    <section>
      <h2>Example 1</h2>
      <h3>User feed</h3>
      <ul className="user-list" >
        {userList.map((user, index) => {
            return (
              <li className="user-item">
                <img className="user-image" src={user.avatarUrl} alt={`${user.name} profile`}/>
                <div className="about-section">
                  <p>{user.name}, {user.age}, {user.location}</p>
                  <p>{user.bio}</p>
                  <p>{user.status}</p>
                </div>
              </li>
            );
        })}
      </ul>
    </section>
  );
}

function generateUser(longBio?: boolean, longStatus?: boolean){
  return {
    name: faker.name.findName(),
    age: faker.datatype.number(99),
    location: faker.address.city(),
    bio: "أولئك الذين سيشرحون العواقب قد أعمتهم حقيقة أن المخترع قد تصدى للنظام. الألم الذي يمنع هؤلاء النساء من إدراكهن. إن لم يكن كل لحظات حياته أو حياتها الأعظم. ولهذا السبب نعتبر التدريب من تلك الخدمات. لمن ينتمون ، ولمن لهم كل الحق في الاختيار. حيث أن كل عقبة تمنع من يسعون إلى العواقب. من من ام ماذا. ملذات أخرى غير ما هي عليه. نحن نعتبرهم هم ما يدفعنا إلى المتعة ، ولكن ليس لنا. الحقيقة والأعراض.",
    avatarUrl: faker.image.avatar(),
    status: "ولئك الذين سيشرحون العواقب قد أعمتهم حقيقة أن المخترع قد تصدى للنظام. الألم الذي يمنع هؤلاء النساء من إدراكهن. إن لم يكن كل لحظات حياته أو حياتها الأعظم. ولهذا السبب نعتبر التدريب من تلك الخدمات. لمن ينتمون ، ولمن لهم كل الحق في الاختيار. حيث أن كل عقبة تمنع من يسعون إلى العواقب. من من ام ماذا. ملذات أخرى غير ما هي عليه. نحن نعتبرهم هم ما يدفعنا إلى المتعة ، ولكن ليس لنا. الحقيقة والأعراض.",
  };
};