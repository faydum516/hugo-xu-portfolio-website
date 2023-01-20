const withBackgroundColor = (Component) => () => {

    const backgroundColor = {
        backgroundColor: '#00000080',
        color: '#F1F1F1',
        padding: 15,
        margin: '20px 0',
        borderRadius: 10
    };

    return (
        <div style = {backgroundColor}>
            <Component />
        </div>
    )
        
}

export default withBackgroundColor;