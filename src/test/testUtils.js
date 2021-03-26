// function to find the node by the data-test attribute
export const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test='${value}']`);
