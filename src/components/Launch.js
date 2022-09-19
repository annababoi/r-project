function Launch(props) {
        const {launch} = props;

    return (<div class ="launch">
        <h2>{launch.mission_name}</h2>
        <h3>{launch.launch_year}</h3>
        <div><img src={launch.links.mission_patch_small} alt=""/></div>

    </div>)
}

export default Launch;