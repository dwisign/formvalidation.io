$(document).ready(function() {
    $('#securePasswordForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    callback: {
                        message: 'The password is not valid',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true;
                            }

                            // Check the password strength
                            if (value.length < 8) {
                                return {
                                    valid: false,
                                    message: 'It must be more than 8 characters long'
                                };
                            }

                            // The password doesn't contain any uppercase character
                            if (value === value.toLowerCase()) {
                                return {
                                    valid: false,
                                    message: 'It must contain at least one upper case character'
                                }
                            }

                            // The password doesn't contain any uppercase character
                            if (value === value.toUpperCase()) {
                                return {
                                    valid: false,
                                    message: 'It must contain at least one lower case character'
                                }
                            }

                            // The password doesn't contain any digit
                            if (value.search(/[0-9]/) < 0) {
                                return {
                                    valid: false,
                                    message: 'It must contain at least one digit'
                                }
                            }

                            return true;
                        }
                    }
                }
            }
        }
    });
});