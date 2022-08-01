import styled from 'styled-components';

const FormData = (props) => {
    const {data} = props;
    return (
        <FormBoxWrapper>
            <TitleForm>{data.title}</TitleForm>
            <BodyForm>
                <TextForm>
                    {data.title === 'Object' || data.title === 'Hobbies' ? (
                        data.data
                    ) : data.title === 'Bio' || data.title === 'Skills' ? (
                        <GridDataForm>
                            {data.data.length > 0
                                ? data.data.map((item, index) => (
                                      <>
                                          <span className="firstData">
                                              {item.split('|')[0]}
                                          </span>
                                          <span>{item.split('|')[1]}</span>
                                      </>
                                  ))
                                : null}
                        </GridDataForm>
                    ) : null}
                </TextForm>
            </BodyForm>
        </FormBoxWrapper>
    );
};

export default FormData;

const FormBoxWrapper = styled.div`
    width: 100%;
    /* background: #21c7773f; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 5px;
`;

const TitleForm = styled.div`
    width: fit-content;
    /* background: #56920e71; */
    border-bottom: 3px outset ;

    font-size: 1.5rem;
    font-weight: 800;
`;
const BodyForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 5px;
`;

/// Decorate for data
const TextForm = styled.div`
    text-align: justify;
    text-indent: 2em;
    word-spacing: -2px;
    word-wrap: break-word;
    /* font-weight: 400; */
`;

const GridDataForm = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    .firstData {
        font-weight: 700;
    }
`;
