import React,{useState,useEffect} from 'react'
import emojiIcon from '../assets/tag_faces.svg'
import micIcon from '../assets/mic.svg'
import sendIcon from '../assets/send.svg'

export default function ChatInputBox({ message, setMessage, pushMessage }) {
    function handleKeyDown(e) {
        if (e.key === 'Enter' && message) {
            pushMessage()
        }
    }
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    // alert({selectedFile && <img src={preview}})
    return (
        <div className="chat-input-box">
            <div className="icon emoji-selector">
                <img src={emojiIcon} alt="" />
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
               <div className="hiddenFileInputContainter">
    <img className="fileDownload" src='https://cdn3.iconfinder.com/data/icons/whatsapp-5/512/138_Attachment_Attach_Clip_Add-512.png'/>
    <input type="file"  className="hidden" accept="image/*" onChange={onSelectFile}/>

</div>
{/* <button type="file">cl</button> */}
{/* <input type="file"  accept="image/*" onChange={onSelectFile}/> */}

    {selectedFile &&  <img src={preview} /> }
               {/* <img className="avataruser"  src='https://cdn3.iconfinder.com/data/icons/whatsapp-5/512/138_Attachment_Attach_Clip_Add-512.png' alt="" type="file"/> */}
            </div>

            <div className="icon send" onClick={pushMessage}>
           
                <img src={message ? sendIcon : micIcon} alt="" />
            </div>
        </div>
    )
}
