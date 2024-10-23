export const SkillCard = ({skill_img,name}) => {
    return (
            <div className="item">
                <img src={skill_img} alt='img'/>
                <h5>{name}</h5>
            </div>
    )
}