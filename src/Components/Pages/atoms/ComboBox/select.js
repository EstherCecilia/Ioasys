export const ReduxFormSelect = props => {
    const { input, options } = props;
  
    return (
      <Select 
        {...input} 
        onChange={value => input.onChange(value)} 
        onBlur={() => input.onBlur(input.value)} 
        options={options}
      />
    )
  }