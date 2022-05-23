function Actions(props) {

    console.log(props)
  
    return (
        <div className="actions">

        <i class="far fa-comment">{props.actions}</i>
          <i class="fas fa-retweet">{props.actions}</i>
          <i class="far fa-heart">{props.actions}</i>
          <i class="fas fa-share">{props.actions}</i>
          </div>
    )
}

export default Actions