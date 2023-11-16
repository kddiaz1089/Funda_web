$(document).ready(function () {
    $('#pass').on('input', function () {
        var password = $(this).val();
        var strength = 0;

        // Check for at least 8 characters
        if (password.length >= 8) {
            strength++;
        }

        // Check for at least one lowercase and one uppercase letter
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
            strength++;
        }

        // Check for at least 2 numbers
        if (password.replace(/[^0-9]/g, '').length >= 2) {
            strength++;
        }

        // Display the password strength and change color accordingly
        var strengthBar = $('#password-strength');
        strengthBar.removeClass();

        switch (strength) {
            case 1:
                strengthBar.addClass('weak').text('Weak');
                break;
            case 2:
                strengthBar.addClass('medium').text('Medium');
                break;
            case 3:
                strengthBar.addClass('strong').text('Strong');
                break;
            default:
                strengthBar.text('');
        }
    });
});

function validateForm() {
    // Add additional validation logic if needed
    // Return true if the form is valid, otherwise return false
    return true;
}
