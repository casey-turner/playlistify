// @ts-nocheck
import { createContext, useState } from 'react'
import usePlaylistDataContext from '../hooks/usePlaylistDataContext'

const PlaylistFormContext = createContext()

export const PlaylistFormProvider = ({ children }) => {
  const { tracks, playlistTitles } = usePlaylistDataContext()

  const [selectedTracks, setSelectedTracks] = useState(tracks)
  const [selectedPlaylistTitle, setSelectedPlaylistTitle] = useState('')

  const [step, setStep] = useState(0)

  const contextValue = {
    tracks,
    selectedTracks,
    setSelectedTracks,
    playlistTitles,
    selectedPlaylistTitle,
    setSelectedPlaylistTitle,
    step,
    setStep,
  }

  console.log('contextValue', contextValue)
  return (
    <PlaylistFormContext.Provider value={contextValue}>
      {children}
    </PlaylistFormContext.Provider>
  )
}

export default PlaylistFormContext

// type Track = {
//   title?: string
//   artist?: string
//   album?: string
//   albumCover?: string
// }

// type CustomisePlaylistFormContextType = {
//   title: { [key: number]: string }
//   step: number
//   setStep: (step: number) => void
//   data: {
//     tracks: Track[]
//     title: string[]
//     coverImage: string
//   }
//   setData: (data: {
//     tracks: Track[]
//     title: string
//     coverImage: string
//   }) => void
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   isFormValid: () => boolean
//   disablePrevious: boolean
//   disableNext: boolean
//   removePrevious: boolean
//   removeNext: boolean
//   removeSubmit: boolean
// }

// const CustomisePlaylistFormContext =
//   createContext<CustomisePlaylistFormContextType>(
//     {} as CustomisePlaylistFormContextType
//   )

// export const CustomisePlaylistFormProvider = ({
//   children,
// }: {
//   children: React.ReactNode
// }) => {
//   const title = {
//     0: 'Tracks',
//     1: 'Title',
//     2: 'Cover Image',
//   }

//   const [step, setStep] = useState(0)

//   const [data, setData] = useState<{
//     tracks: Track[]
//     title: string
//     coverImage: string
//   }>({
//     tracks: [],
//     title: '',
//     coverImage: '',
//   })

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const type = event.target.type
//     const name = event.target.name

//     const value =
//       type === 'checkbox' ? event.target.checked : event.target.value

//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }))
//   }

//   const isFormValid = () => {
//     const { tracks, title, coverImage } = data
//     if (
//       tracks.length === 0 ||
//       title === '' ||
//       coverImage === '' ||
//       step !== Object.keys(title).length - 1
//     ) {
//       return false
//     }
//     return true
//   }

//   const disablePrevious = step === 0

//   const disableNext = !isFormValid() || step === Object.keys(title).length - 1

//   const removePrevious = step === 0

//   const removeNext = step === Object.keys(title).length - 1

//   const removeSubmit = step !== Object.keys(title).length - 1

//   return (
//     <CustomisePlaylistFormContext.Provider>
//       {children}
//     </CustomisePlaylistFormContext.Provider>
//   )
// }

// export default CustomisePlaylistFormContext