import React from "react"
import { nanoid } from "nanoid"
import "./App.css"
import { randomLightColor } from "seed-to-color"

interface Chat {
  _id: number
  firstName: string
  lastName: null | string
  message: string
}
const chats: Chat[] = [
  {
    _id: 123123,
    firstName: "Bambang",
    lastName: null,
    message: "Good morning guys!",
  },
  {
    _id: 333333,
    firstName: "Reza",
    lastName: "Aditya",
    message: "Morning!",
  },
  {
    _id: 123123,
    firstName: "Bambang",
    lastName: null,
    message: "Good morning Reza!",
  },
  {
    _id: 777777,
    firstName: "Andy",
    lastName: null,
    message: "gm!",
  },
  {
    _id: 887667,
    firstName: "Mery",
    lastName: null,
    message: "Ey good mroningggg!",
  },
  {
    _id: 887667,
    firstName: "Mery",
    lastName: null,
    message: "Morning*",
  },
  {
    _id: 888888,
    firstName: "Patrick",
    lastName: "Star",
    message: "morning guys!",
  },
  {
    _id: 123123,
    firstName: "Bambang",
    lastName: null,
    message: "Morning All!",
  },
]

const IconName = ({ color, initial }: { color: string; initial: string }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        width: "40px",
        height: "40px",
        backgroundColor: color,
        color: '#fff',
        fontWeight: 'bold'
      }}
    >
      {initial}
    </div>
  )
}

const BubbleMessage = ({
  color,
  fullName,
  message,
}: {
  color: string
  fullName: string
  message: string
}) => {
  return (
    <div className="bubble">
      <div style={{ color }}>{fullName}</div>
      <div className="message">{message}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="like twitch">
        {chats &&
          chats.map((value) => {
            const { _id, firstName, lastName, message } = value
            const fullName = `${firstName} ${lastName || ""}`.trim()

            const color = "#" + randomLightColor(fullName + _id)
            return (
              <div key={nanoid()} className="chat">
                <span style={{ color }}>{fullName}</span>: {message}
              </div>
            )
          })}
      </div>
      <div className="like telegram">
        {chats &&
          chats.map((value) => {
            const { _id, firstName, lastName, message } = value
            const fullName = `${firstName} ${lastName || ""}`.trim()

            const initialName = firstName[0] + (lastName ? lastName[0] : "")

            const baseColor = "#" + randomLightColor(_id)
            return (
              <div key={nanoid()} className="chat">
                <IconName color={baseColor} initial={initialName} />
                <BubbleMessage
                  color={baseColor}
                  fullName={fullName}
                  message={message}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
