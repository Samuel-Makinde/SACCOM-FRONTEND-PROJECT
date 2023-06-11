## Staffs Details

This contain Saccom staffs details

## Staffs Pages

IMAGES
Contain te staffs images

StaffPage.module.css
Contain the CSS

Stafss.jsx
Contain the code for the staff page

`{staffs.map((staff) => {`
`const {id, title, position, img} = staff;`
`return (`
`<div key={id}>`
`<img className="h-[250px]" src={img} alt={title} />`
` <div>`
`<p className="text-[20px] leading-[25.63px] text-[#04050C] capitalize font-medium">{title}</p>`
`<p className="text-[16px] text-[#85868D] leading-[20.29px] font-normal">{position}</p>`
`</div>`
`</div>`
`)`
`})}`
`</div>`

The code above map throught the staff details in the StaffsData.js file
