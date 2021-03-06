import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export default class Month extends Component {
  render() {
    const months = this.props.children && this.props.children.toString()
    const monthsSplit = months && months.split(/[ -]+/)
    let monthNames = ""

    if (monthsSplit && monthsSplit.length > 1) {
      monthsSplit.forEach((item, index) => {
        if (index !== 0) {
          const prev = monthsSplit[index - 1]
          // If previous and current is a number put a dash
          // Otherwise add a space
          if (!isNaN(prev) && !isNaN(item)) {
            monthNames += "-"
          } else {
            monthNames += " "
          }
        }

        if (item === "&") {
          monthNames += item
        } else {
          const monthIndex = parseInt(item) - 1
          monthNames += monthsOfYear[monthIndex]
        }
      })
    } else {
      monthNames = "All Year"
    }

    return (
      <>
        <FontAwesomeIcon icon={faCalendarAlt} /> <span>{monthNames}</span>
      </>
    )
  }
}
