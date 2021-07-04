import React from "react"
import { Link } from "gatsby"

import * as style from "./catlist.module.css"

const Taglist = ({ postObject }) => {
  return (
    <div className={style.article__catlist}>
      {postObject.tags.nodes.map((tag, index) => [
        index > 0 && ", ",
        <Link key={index} to={tag.link}>
          {tag.name}
        </Link>,
      ])}
    </div>
  )
}

export default Taglist
