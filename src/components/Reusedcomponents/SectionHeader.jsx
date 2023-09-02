/* eslint-disable react/prop-types */
export const SectionHeader = (props) => {
    return (
        <>
            <div className="section-header">
                <div id='about-me' className='section-title'>
                    {props.header ? props.header : "Header empty"}
                </div>
            </div>

            {props.paragraph ? <div className="section-paragraph">
                <div className='paragraph'>
                    {props.paragraph}
                </div>
            </div> : ''}
        </>
    )
}