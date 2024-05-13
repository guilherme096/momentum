function BackButton(props) {
    const history = useHistory();

    const goBack = () => {
        console.log("Going back");
        history.goBack();
    };

    return (
        <button {...props} onClick={goBack}>Go Back</button>
    );
}
