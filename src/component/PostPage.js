import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap'
import { postButtonStyle, uploadImageButton, imageCloseButton } from '../style'
import { useAuth } from '../context/AuthContext'
import {db, storage} from '../firebase'
import { useHistory } from "react-router-dom"
import "../App.css"
import {ReactComponent as FacebookLogo} from '../facebookLogo.svg'
import {ReactComponent as InstaLogo} from '../instagramLogo.svg'
import {ReactComponent as TwitterLogo} from '../twitterLogo.svg'
import closeLogo from '../closeLogo.svg'
import photoIcon from '../photoLibrary.svg'

export default function PostPage() {
    const imageRef = useRef()
    const titleRef = useRef()
    const textRef = useRef()
    const [uploadImage, setUploadImage] = useState(null)
    const [uploadImageURL, setUploadImageURL] = useState("")
    const [previewImage, setPreviewImage] = useState(null)
    const [error, setError] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [checkCount, setCheckCount] = useState(0)
    const [socialList, setSocialList] = useState([])
    const { sidebarVisible, currentUser } = useAuth()
    const history = useHistory()

    function handleImage(e) { // convert image files into image url
        if (e.target.files[0]) {
            setUploadImage(e.target.files[0])
            setPreviewImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    function cancelImage() { // remove image
        setUploadImage(null)
        setPreviewImage(null)
        document.getElementById("upload-image").value = ""
    }

    function isChecked(e) { 
        if (e.target.checked) { // if current social media is chosen, push it into the list and add 1 to checkCount
            setCheckCount(checkCount + 1)
            setSocialList(arr => [...arr, e.target.id])
        } else { // if current social media is unchosen, remove it from the list and minus 1 to checkCount 
            setCheckCount(checkCount - 1)
            setSocialList(socialList.filter(item => item !== e.target.id))
        }
    }

    function handleStorage() { // firebase image storage 
        const userID = currentUser.email.split("@")[0]
        const uploadTask = storage.ref("users/" + userID + "/" + uploadImage.name).put(uploadImage) // image store path
        uploadTask.on(
            "state_changed", 
            snapshot => {},
            error => {
                throw error
            },
            () => {
                storage.ref("users/" + userID + "/" + uploadImage.name).getDownloadURL().then(url => {setUploadImageURL(url)})
            })
    }

    function handleDB() { // firebase database
        const userID = currentUser.email.split("@")[0]
        const postRef = db.ref("users/" + userID) // data store path
        const postData = { // data to store in firebase
            user: currentUser.email,
            title: titleRef.current.value,
            text: textRef.current.value,
            imageName: uploadImage.name,
            time: new Date().toLocaleString(),
            socialMedia: socialList,
            viewers : 0
        }
        postRef.push(postData) // push the data to userID folder in firebase realtime database 
    }


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError(false)
            setImageError(false)

            if (uploadImage == null) { 
                setImageError("Upload Image")
            }
            await handleStorage()
            await handleDB()
            history.push("/analytics")
        } catch (err) {
            setError("Failed to upload: ", err)
        }
        
    }


    return (
        <Container id={sidebarVisible && "content"} className="d-flex align-items-center justify-content-center mt-3 mb-3" style = {{flex: "1"}}>
            <div className="w-100 ml-auto mr-auto" style={{maxWidth: '500px'}} >
                {error && <Alert variant="danger">{error}</Alert>} 
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center justify-content-center">
                    <Form.Group id="title">
                        <Form.Control className="mb-1" type="text" ref={titleRef} required placeholder="Title for the post" style={{width: "300px", height:"40px"}}/>
                    </Form.Group>
                    </div>
                
                    <Card style={{maxHeight: "600px"}}>
                        <Card.Body className="d-flex flex-column overflow-auto" style={{flex: "1"}}>
                            {imageError && <Alert variant="danger">{imageError}</Alert>}
                            <div>
                                {uploadImage ? 
                                    (<div style={{position: "relative", width: "100%"}}>
                                        <button onClick={cancelImage} className="closeButton d-flex flex-column align-items-center justify-content-center" style={imageCloseButton}>
                                            <img src={closeLogo} alt="closeLogo" /> 
                                        </button>
                                        <Card.Img src={previewImage} style={{width: "100%", height: "auto"}} />
                                    </div>) 
                                    : (<label type="button" htmlFor="upload-image" required className="d-flex flex-column align-items-center justify-content-center" style={uploadImageButton}>
                                        <span >
                                            <img src={photoIcon} alt="photoIcon" />
                                        </span> 
                                            <h5 className="text-center mt-2" style={{color: "#BB0101"}}>Upload your photo</h5>
                                       </label>) }
                            </div>
                            
                

                            <Form.Group id="textpost">
                                <Form.Control className="border border-white overflow-auto mt-3" ref={textRef} as="textarea" required rows={10} placeholder="Write a caption..." style={{minHeight: "200px", maxHeight: "200px"}}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.File id="upload-image" required={uploadImage == null ? true : false} ref={imageRef} accept="image/*, video/*" onChange={handleImage} style={{display: "none"}} />
                            </Form.Group>
                            <div className="d-flex justify-content-center mt-auto" required>
                            <Row>
                                <Col >
                                    <input id="facebookCheck" type="checkbox" class="form-check-input position-static" onChange={isChecked} required={checkCount > 0 ? false : true}/>
                                    <FacebookLogo style={{marginLeft: "10px", marginBottom: "5px"}} />
                                </Col>
                                <Col style={{margin: "0px 20px"}}>
                                    <input id="instagramCheck" type="checkbox" class="form-check-input position-static" onChange={isChecked} required={checkCount > 0 ? false : true} />
                                    <InstaLogo style={{marginLeft: "10px", marginBottom: "5px"}}  />
                                </Col>
                                <Col>
                                    <input id="twitterCheck" type="checkbox" class="form-check-input position-static" onChange={isChecked} required={checkCount > 0 ? false : true} />
                                    <TwitterLogo style={{marginLeft: "10px", marginBottom: "5px"}} />
                                </Col>
                            </Row>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="d-flex align-items-center justify-content-center">
                    <Button className="mt-4" type="submit" variant="danger" style={postButtonStyle}>Post</Button>   
                    </div>
                </Form>
            </div>
        </Container>
    )
}
